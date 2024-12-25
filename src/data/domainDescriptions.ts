export interface DomainDescription {
  title: string;
  description: string;
  highDescription: string;
  aboveAverageDescription: string;
  averageDescription: string;
  belowAverageDescription: string;
  lowDescription: string;
}

export const domainDescriptions: Record<string, DomainDescription> = {
  neuroticism: {
    title: "Emotional Sensitivity",
    description: "Represents how you experience and manage emotions, especially in response to stress or negative events.",
    highDescription: "You are highly sensitive to stress and emotional fluctuations, often feeling intense emotions or worry.",
    aboveAverageDescription: "You tend to feel stressed or reactive at times but can usually regain balance with effort.",
    averageDescription: "You are generally steady, balancing emotional sensitivity with resilience in handling life's ups and downs.",
    belowAverageDescription: "You tend to remain calm and composed, even in challenging situations, with little emotional disruption.",
    lowDescription: "You are exceptionally stable, rarely feeling stressed or emotionally overwhelmed, even under pressure."
  },
  extraversion: {
    title: "Social Energy",
    description: "Reflects how much you enjoy social interaction and external stimulation.",
    highDescription: "You are energized by social situations, thriving in dynamic environments with lots of interaction.",
    aboveAverageDescription: "You enjoy socializing and external activities, though you also value moments of quiet reflection.",
    averageDescription: "You are comfortable in both social settings and solitary activities, adapting easily to different situations.",
    belowAverageDescription: "You prefer smaller gatherings or one-on-one interactions, finding large or frequent social activities draining.",
    lowDescription: "You are deeply introspective and prefer solitude, often avoiding social situations in favor of quiet personal time."
  },
  openness: {
    title: "Openness to Experience",
    description: "Describes your curiosity, imagination, and willingness to explore new ideas and experiences.",
    highDescription: "You are highly imaginative and curious, drawn to new ideas, abstract thinking, and creative pursuits.",
    aboveAverageDescription: "You enjoy exploring new experiences and ideas, while still appreciating some routine and structure.",
    averageDescription: "You balance curiosity with practicality, enjoying a mix of new experiences and familiar routines.",
    belowAverageDescription: "You prefer concrete and familiar experiences, with limited interest in abstract or unconventional ideas.",
    lowDescription: "You are focused on tradition and routine, avoiding novelty and abstract thinking in favor of practicality."
  },
  agreeableness: {
    title: "Interpersonal Style",
    description: "Reflects how you interact with others, balancing compassion, cooperation, and assertiveness.",
    highDescription: "You are deeply empathetic and cooperative, often prioritizing others' needs and maintaining harmony in relationships.",
    aboveAverageDescription: "You tend to be kind and considerate, often going out of your way to help others while balancing your own needs.",
    averageDescription: "You balance being cooperative and assertive, showing care for others while maintaining healthy boundaries.",
    belowAverageDescription: "You are more self-focused and direct, often prioritizing your own needs and goals in interactions.",
    lowDescription: "You are highly independent and assertive, preferring direct communication and focusing on personal priorities."
  },
  conscientiousness: {
    title: "Organization & Planning",
    description: "Describes how disciplined, organized, and goal-oriented you are in your daily life.",
    highDescription: "You are exceptionally disciplined and organized, excelling at planning and consistently working toward your goals.",
    aboveAverageDescription: "You tend to be reliable and well-organized, preferring to follow plans and structures to achieve your objectives.",
    averageDescription: "You balance structure and flexibility, being moderately goal-oriented and adaptable in your approach.",
    belowAverageDescription: "You tend to take a more relaxed approach, being flexible and spontaneous rather than strictly organized.",
    lowDescription: "You are highly spontaneous and adaptable, avoiding rigid plans and preferring to approach tasks intuitively."
  }
};
