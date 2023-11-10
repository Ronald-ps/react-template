/* {
      "id": 4,
      "title": "Contribuição 4",
      "description": "Descrição da contribuição 4",
      "user_id": 1,
      "benefits": [
        {
          "id": 1,
          "title": "Benefício 1",
          "description": "Descrição do benefício 1",
          "contribution_id": 1
        },
        {
          "id": 2,
          "title": "Benefício 2",
          "description": "Descrição do benefício 2",
          "contribution_id": 1
        }
      ],
      "date": "2023-11-09T22:14:28.212Z"
    } */

interface Benefit {
  id: number;
  title: string;
  description: string;
  contribution_id: number;
}
export interface Contribution {
  id: number;
  title: string;
  description: string;
  user_id: number;
  benefits: Benefit[];
  date: string;
}
export const getContributions = async (
  userId: number
): Promise<Contribution[]> => {
  const response = await fetch(`http://localhost:3333/contributions/${userId}`);
  const contributions: Contribution[] = await response.json();
  return contributions;
};
