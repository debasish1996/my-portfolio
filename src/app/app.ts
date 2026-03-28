import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type ExpertiseCard = {
  title: string;
  summary: string;
  stack: string;
};

type ProductHighlight = {
  label: string;
  detail: string;
};

@Component({
  selector: 'app-root',
  imports: [NgOptimizedImage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly linkedInUrl = 'https://www.linkedin.com/in/debasish-sahoo-35a56817b/';
  protected readonly githubUrl = 'https://github.com/debasish1996';
  protected readonly profileImagePath = '/my_pic_2.jpg';
  protected readonly sideProjectUrl = 'https://bloc-verse.com/';
  protected readonly phoneDisplay = '+91 7008432123';
  protected readonly phoneLink = 'tel:+917008432123';
  protected readonly emailAddress = 'debasishsahoo444@gmail.com';

  protected readonly strengths = signal<readonly string[]>([
    'Frontend architecture with Angular, RxJS, and scalable UI systems',
    'Full-stack delivery with Node.js, .NET, REST APIs, and integrations',
    'AI integration with GPT-powered automation and conversational UX',
    'Product thinking, rapid prototyping, and end-to-end ownership',
    'Debugging, performance optimization, and maintainable code quality',
  ]);

  protected readonly expertiseCards = signal<readonly ExpertiseCard[]>([
    {
      title: 'Scalable Frontend Architecture',
      summary:
        'I design component-driven Angular systems that stay fast, predictable, and maintainable as products scale.',
      stack: 'Angular, TypeScript, RxJS, architecture patterns',
    },
    {
      title: 'Backend and Integration Engineering',
      summary:
        'I build robust services and APIs with Node.js and .NET, with deep integration across enterprise tools and cloud services.',
      stack: 'Node.js, .NET, REST APIs, Azure services',
    },
    {
      title: 'AI-Powered Product Features',
      summary:
        'I integrate GPT APIs to deliver automated workflows, context-aware assistants, and intelligent user experiences.',
      stack: 'GPT APIs, automation, conversational interfaces',
    },
  ]);

  protected readonly productHighlights = signal<readonly ProductHighlight[]>([
    {
      label: 'Analytics Platforms',
      detail:
        'Delivered product capabilities that turn complex data into actionable dashboards and operational insights.',
    },
    {
      label: 'Communication and Workflow Tools',
      detail:
        'Built collaboration and process-centric experiences that improve clarity, speed, and execution across teams.',
    },
    {
      label: 'Enterprise Integrations',
      detail:
        'Connected products with APIs, bots, and Azure-backed services to create reliable, extensible business workflows.',
    },
  ]);

  protected readonly strengthsCount = computed(() => this.strengths().length);

  protected readonly currentYear = new Date().getFullYear();
}
