import { db } from "../db";
import { goals } from "../db/schema";

interface CreateGoalRequest {
  title: string;
  desiresWeekLyFrequency: number;
}

export async function createGoal({
  title,
  desiresWeekLyFrequency,
}: CreateGoalRequest) {
  const result = await db
    .insert(goals)
    .values({
      title,
      desiresWeekLyFrequency,
    })
    .returning();

  const goal = result[0];

  return {
    goal,
  };
}
