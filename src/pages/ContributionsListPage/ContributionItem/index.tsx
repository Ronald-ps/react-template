import { Contribution } from "@/services/contribution";
import { Box, Paper, Text } from "@mantine/core";

interface ContributionItemProps {
  contribution: Contribution;
}
export const ContributionItem = (props: ContributionItemProps) => {
  return (
    <Paper withBorder p="20px" shadow="xs">
      <Box>
        <Text>{props.contribution.title}</Text>
        <Text>{props.contribution.date}</Text>
      </Box>
      <Box>
        <Text>
          {props.contribution.description}
        </Text>
      </Box>
    </Paper>
  );
};
