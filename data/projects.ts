type ProjectLink = {
  label: string;
  href: string;
};

type ProjectImage = {
  src: string;
  alt: string;
};

type BaseProject = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  perspective: string;
  period: string;
  team: string;
  role: string;
  stack: string[];
  image?: string;
  imageAlt?: string;
  status?: string;
  links: ProjectLink[];
};

export type FeaturedProject = BaseProject & {
  variant: "featured";
  designScope: string;
  developmentScope: string;
  overviewImage: ProjectImage;
  context: string;
  serviceDesign: string;
  problem: string;
  designDecisions: {
    title: string;
    description: string;
  }[];
  comparisonPairs: {
    title: string;
    design: ProjectImage;
    implementation: ProjectImage;
  }[];
  implementation: string[];
  architecture: string;
  result: string;
};

export type StandardProject = BaseProject & {
  variant: "standard";
  context: string;
  focus: string;
  implementation: string[];
};

export type Project = FeaturedProject | StandardProject;

export const projects: Project[] = [
  {
    variant: "featured",
    slug: "sosoeat",
    number: "01",
    title: "SOSOEAT",
    subtitle: "1인 가구를 위한 소셜 모임 서비스",
    perspective: "UI/UX Design · Frontend Development",
    period: "2026.03.10 - 2026.04.17",
    team: "5인 팀",
    role: "UI/UX Design · Frontend Development",
    stack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
    designScope: "Entire SOSOEAT Service UI/UX",
    developmentScope: "SosoTalk Frontend",
    overviewImage: {
      src: "/assets/sosoeat/sosoeat_figma.png",
      alt: "SOSOEAT 전체 서비스 UI/UX Figma 프레임 overview",
    },
    context:
      "홈, 모임 탐색, 찜한 모임, 소소Talk을 포함한 서비스 전반의 UI/UX를 Figma에서 설계했습니다.",
    serviceDesign:
      "전체 서비스의 화면 흐름과 정보 구조를 설계하고, 프론트엔드 개발에서는 소소Talk 영역을 직접 구현했습니다.",
    problem:
      "함께먹기, 공동구매, 커뮤니티 등 서로 다른 기능을 하나의 서비스 안에서 사용자가 자연스럽게 탐색할 수 있도록 화면 구조와 정보 위계를 정리할 필요가 있었습니다.",
    designDecisions: [
      {
        title: "서비스 탐색 구조",
        description:
          "홈에서 함께먹기·공동구매·소소Talk로 이어지는 주요 탐색 흐름을 구성했습니다.",
      },
      {
        title: "UI 일관성",
        description:
          "카드, CTA, 상태 표현 등의 UI 패턴을 서비스 전반에서 일관되게 사용할 수 있도록 구성했습니다.",
      },
      {
        title: "콘텐츠 정보 위계",
        description:
          "소소Talk에서 이미지, 제목, 작성자, 좋아요·댓글 정보의 우선순위를 설계했습니다.",
      },
      {
        title: "Filter & Interaction",
        description:
          "전체/인기 TALK와 댓글·좋아요·최신순 정렬 구조를 분리하고 상세·공유 인터랙션 흐름을 설계했습니다.",
      },
    ],
    comparisonPairs: [
      {
        title: "SosoTalk",
        design: {
          src: "/assets/sosoeat/소소토크_메인 페이지.png",
          alt: "SOSOEAT 소소Talk Figma 디자인 화면",
        },
        implementation: {
          src: "/assets/sosoeat/sosotalk_desktop.png",
          alt: "SOSOEAT 소소Talk 실제 구현 화면",
        },
      },
    ],
    implementation: [
      "Next.js와 TanStack Query를 기반으로 목록, 상세, 필터, 공유 UI를 구현했습니다.",
      "공통 UI 컴포넌트와 FSD 구조를 프로젝트 흐름에 맞게 정리했습니다.",
    ],
    architecture: "공통 UI 컴포넌트 정리 및 FSD 구조 개선",
    result:
      "화면 구조를 단순화하고 불필요한 재요청을 줄여 재진입 경험을 개선했습니다.",
    image: "/assets/sosoeat/sosoeat-sosotalk-desktop.png",
    imageAlt: "SOSOEAT 소소Talk 화면 스크린샷",
    status: "완료",
    links: [
      { label: "GitHub", href: "https://github.com/sw61/sosoeat" },
      { label: "Live", href: "https://sosoeat.vercel.app/home" },
      {
        label: "Figma Deck",
        href: "https://www.figma.com/deck/EzktjUb9RepmTAnqSb6jQ9",
      },
      {
        label: "Figma Design",
        href: "https://www.figma.com/design/Oe8siqCQZcWZsd6hpcHc16/%EA%B3%A0%EC%96%91%EC%9D%B4%EB%8A%94-9%EC%97%BD%EA%B5%B0?node-id=2788-93306&t=Bl2b1jFBnC7Stw6J-1",
      },
    ],
  },
  {
    variant: "standard",
    slug: "facebook-redesign",
    number: "02",
    title: "Facebook Redesign",
    subtitle: "소셜 미디어 UI/UX 재구성 프로젝트",
    perspective: "Social UI / Interface Design",
    period: "2024.09.09 - 2024.10.18",
    team: "6인 팀",
    role: "Frontend",
    stack: ["React", "React Router", "Styled-components", "Firebase"],
    context:
      "SNS 인터페이스 구조를 재설계하고 반응형 UI로 구현한 팀 프로젝트입니다.",
    focus: "게시글 작성, 상세, 댓글, 프로필 흐름 구현",
    implementation: [
      "Firebase 인증",
      "Firestore CRUD",
      "반응형 게시글 상세 UI",
    ],
    image: "/assets/facebook-main.png",
    imageAlt: "Facebook Redesign 메인 화면 스크린샷",
    status: "완료",
    links: [
      {
        label: "GitHub",
        href: "https://github.com/yerixx/Teamproject_Facebook_EZ",
      },
      { label: "Live", href: "https://facebook-ez.web.app" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/UIa8NNVo6q69Onj8Sl7w1w/-%EC%A0%95%EB%A9%B4%EB%8F%8C%ED%8C%8C-Facebook--Copy-?node-id=1625-2",
      },
    ],
  },
  {
    variant: "standard",
    slug: "oliveyoung-redesign",
    number: "03",
    title: "Olive Young Redesign",
    subtitle: "커머스 UI/UX 개선 프로젝트",
    perspective: "Commerce UI / Interaction",
    period: "2024.07.12 - 2024.09.06",
    team: "4인 팀",
    role: "Frontend",
    stack: ["HTML", "CSS", "JavaScript", "Firebase"],
    context:
      "커머스 상품 탐색과 구매 흐름을 HTML/CSS/JavaScript로 재구성한 팀 프로젝트입니다.",
    focus: "상품 목록, 상세, 장바구니 흐름 구현",
    implementation: [
      "상품 목록과 상품 상세 화면",
      "장바구니 수량 변경과 가격 계산",
      "LocalStorage 기반 장바구니 유지와 slider UI",
    ],
    image: "/assets/oliveyoung-main.png",
    imageAlt: "Olive Young Redesign 메인 화면 스크린샷",
    status: "완료, GitHub Private",
    links: [
      { label: "Live", href: "https://oliveyoung-yesshow.web.app/" },
      {
        label: "Figma",
        href: "https://www.figma.com/design/mYBfR5Cm27lJElWLcboG8m/Olive-Yong_ReDesign-Team-Project?node-id=1390-14",
      },
    ],
  },
];
