import { client, db } from ".";
import { goalCompletions, goals } from "./schema";
import dayjs from "dayjs";

async function seed() {
  await db.delete(goalCompletions);
  await db.delete(goalCompletions);

  const result = await db
    .insert(goals)
    .values([
      { title: "Acordar cedu", desiresWeekLyFrequency: 5 },
      { title: "Exercico fisico", desiresWeekLyFrequency: 5 },
      { title: "Meditar", desiresWeekLyFrequency: 5 },
    ])
    .returning();

  const startOfWeek = dayjs().startOf("week");

  await db.insert(goalCompletions).values([
    { goalId: result[0].id, createdAt: new Date() },
    { goalId: result[1].id, createdAt: startOfWeek.add(1, "day").toDate() },
  ]);
}

seed().finally(() => {
  client.end();
});
