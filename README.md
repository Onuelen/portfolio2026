# Ji Seong Jun Portfolio 2026

Design to Interface.

사용자 경험과 정보 구조를 고민하고, 디자인 의도를 실제 동작하는 웹 인터페이스로 구현하는 프론트엔드 포트폴리오입니다.

## Overview

이 포트폴리오는 프론트엔드 개발 역량만 나열하기보다, 시각디자인 배경에서 출발한 UI/UX 설계와 웹 인터페이스 구현 경험을 함께 보여주기 위해 제작했습니다.

- UI/UX design and frontend development
- Responsive web publishing
- Editorial portfolio layout
- Project image focused case study
- Design-to-implementation workflow

## Featured Case Study

### SOSOEAT

1인 가구를 위한 소셜 모임 서비스입니다.

- Role: UI/UX Design · Frontend Development
- Design Scope: Entire SOSOEAT Service UI/UX
- Development Scope: SosoTalk Frontend
- Technical: Next.js, TypeScript, TanStack Query, Zustand, Tailwind CSS

SOSOEAT에서는 홈, 모임 탐색, 찜한 모임, 소소Talk을 포함한 서비스 전반의 UI/UX를 Figma에서 설계했고, 프론트엔드 개발에서는 SosoTalk 영역을 직접 구현했습니다.

## Other Projects

### Facebook Redesign

SNS 인터페이스 구조를 재설계하고 반응형 UI로 구현한 팀 프로젝트입니다.

- Focus: 게시글 작성, 상세, 댓글, 프로필 흐름 구현
- Tech: React, React Router, Styled-components, Firebase

### Olive Young Redesign

커머스 상품 탐색과 구매 흐름을 HTML/CSS/JavaScript로 재구성한 팀 프로젝트입니다.

- Focus: 상품 목록, 상세, 장바구니 흐름 구현
- Tech: HTML, CSS, JavaScript, Firebase

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Project Structure

```text
app/
  globals.css
  layout.tsx
  page.tsx
components/
  About.tsx
  Capability.tsx
  Contact.tsx
  Footer.tsx
  Header.tsx
  Hero.tsx
  ImageLightbox.tsx
  SelectedWorks.tsx
  VisualDesign.tsx
data/
  projects.ts
  visualDesign.ts
public/
  assets/
```

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

```bash
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

## Verification

Before deployment, the project was checked with:

```bash
npm run lint
npm run typecheck
npm run build
```
