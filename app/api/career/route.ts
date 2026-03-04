import { NextResponse } from 'next/server';

const MAX_CV_SIZE_BYTES = 5 * 1024 * 1024;

function isValidLinkedinUrl(value: string) {
  try {
    const parsed = new URL(value);
    const isHttp = parsed.protocol === 'http:' || parsed.protocol === 'https:';
    return isHttp && parsed.hostname.includes('linkedin.com');
  } catch {
    return false;
  }
}

function isPdfFile(file: File) {
  if (file.type === 'application/pdf') {
    return true;
  }
  return file.name.toLowerCase().endsWith('.pdf');
}

export async function POST(request: Request) {
  try {
    const payload = await request.formData();
    const roleId = String(payload.get('roleId') ?? '').trim();
    const roleTitle = String(payload.get('roleTitle') ?? '').trim();
    const name = String(payload.get('name') ?? '').trim();
    const expectedSalaryClp = Number(String(payload.get('expectedSalaryClp') ?? ''));
    const linkedinUrl = String(payload.get('linkedinUrl') ?? '').trim();
    const cvFile = payload.get('cvFile');

    if (
      !roleId ||
      !roleTitle ||
      !name ||
      !Number.isFinite(expectedSalaryClp) ||
      expectedSalaryClp <= 0 ||
      !linkedinUrl ||
      !isValidLinkedinUrl(linkedinUrl)
    ) {
      return NextResponse.json({ ok: false, message: 'Invalid payload' }, { status: 400 });
    }

    if (cvFile instanceof File) {
      if (!isPdfFile(cvFile) || cvFile.size > MAX_CV_SIZE_BYTES) {
        return NextResponse.json({ ok: false, message: 'Invalid CV file' }, { status: 400 });
      }
    }

    console.log('Career application payload:', {
      roleId,
      roleTitle,
      name,
      expectedSalaryClp,
      linkedinUrl,
      cvFileName: cvFile instanceof File ? cvFile.name : null,
      cvFileSize: cvFile instanceof File ? cvFile.size : null
    });

    // TODO: Persist payload in a database and/or notify a hiring channel.
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Career form error:', error);
    return NextResponse.json({ ok: false, message: 'Invalid request' }, { status: 400 });
  }
}
