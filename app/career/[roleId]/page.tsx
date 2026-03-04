import { notFound } from 'next/navigation';
import CareerRoleApplication from '@/components/CareerRoleApplication';
import { getCareerRoleById } from '@/lib/careerRoles';

type CareerRolePageProps = {
  params: {
    roleId: string;
  };
};

export default function CareerRolePage({ params }: CareerRolePageProps) {
  const role = getCareerRoleById(params.roleId);

  if (!role) {
    notFound();
  }

  return <CareerRoleApplication role={role} />;
}
