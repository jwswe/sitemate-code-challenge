export interface Issue {
  id: string;
  title: string;
  description: string;
}

export let issues: Issue[] = [
  {
    id: "33fbf0ff-af80-4e61-9027-7d3c735ea8d0",
    title: "UI is not working",
    description: "Browser is freezing",
  },
  {
    id: "be182607-3dfc-4034-8031-eb58d0b62646",
    title: "Need a confirmation field",
    description: "As a user, I want to...",
  },
  {
    id: "7d28fe10-d4d7-4ae6-9e7a-a4caff883f89",
    title: "Response time is too long",
    description: "As a user, I want to...",
  },
];
