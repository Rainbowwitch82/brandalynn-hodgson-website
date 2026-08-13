import StoryLayout from "@/components/StoryLayout";
import Story from "./story";

export default function TheMossBridePage() {
  return (
    <StoryLayout
      title="The Moss Bride"
      category="Southern Gothic Short Story"
      image="/images/stories/the-moss-bride.png"
      readingTime="12 minute read"
    >
      <Story />
    </StoryLayout>
  );
}