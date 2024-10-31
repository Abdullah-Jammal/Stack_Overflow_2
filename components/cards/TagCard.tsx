import React from "react";

import { Badge } from "@/components/ui/badge";

interface Props {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  return (
    <div>
      <Badge variant="outline">Badge</Badge>
    </div>
  );
};

export default TagCard;
