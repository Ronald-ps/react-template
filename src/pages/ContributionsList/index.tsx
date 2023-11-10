import { getContributions as getContributionsService, type Contribution } from '@services/contribution';
import { useAuth } from '@components/auth/AuthProvider';
import { useState } from 'react';

export const ContributionsListPage = () => {
  const [contributions, setContributions] = useState<Contribution[]>([]);

  const { loggedUser } = useAuth();
  const getContributions = async () => {
    const contributions =  await getContributionsService(loggedUser.id);
  }
  return (
    <div>
      <h1>Contributions</h1>
    </div>
  );
}
