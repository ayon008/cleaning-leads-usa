// "use client";

// import React, { JSX } from 'react';

// interface SemanticSectionProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
//   ariaLabel?: string;
//   role?: string;
// }

// export const Main: React.FC<SemanticSectionProps> = ({
//   children,
//   className = '',
//   id,
//   ariaLabel
// }) => (
//   <main
//     id={id}
//     className={className}
//     aria-label={ariaLabel}
//     role="main"
//   >
//     {children}
//   </main>
// );

// export const Section: React.FC<SemanticSectionProps> = ({
//   children,
//   className = '',
//   id,
//   ariaLabel,
//   role
// }) => (
//   <section
//     id={id}
//     className={className}
//     aria-label={ariaLabel}
//     role={role}
//   >
//     {children}
//   </section>
// );

// export const Article: React.FC<SemanticSectionProps> = ({
//   children,
//   className = '',
//   id,
//   ariaLabel
// }) => (
//   <article
//     id={id}
//     className={className}
//     aria-label={ariaLabel}
//   >
//     {children}
//   </article>
// );

// export const Aside: React.FC<SemanticSectionProps> = ({
//   children,
//   className = '',
//   id,
//   ariaLabel,
//   role
// }) => (
//   <aside
//     id={id}
//     className={className}
//     aria-label={ariaLabel}
//     role={role}
//   >
//     {children}
//   </aside>
// );

// interface HeadingProps {
//   children: React.ReactNode;
//   level: 1 | 2 | 3 | 4 | 5 | 6;
//   className?: string;
//   id?: string;
// }

// export const Heading: React.FC<HeadingProps> = ({
//   children,
//   level,
//   className = '',
//   id
// }) => {
//   const Tag = `h${level}` as keyof JSX.IntrinsicElements;

//   return (
//     <Tag
//       id={id}
//       className={className}
//     >
//       {children}
//     </Tag>
//   );
// };

// interface ListProps {
//   children: React.ReactNode;
//   className?: string;
//   id?: string;
//   ariaLabel?: string;
//   ordered?: boolean;
// }

// export const List: React.FC<ListProps> = ({
//   children,
//   className = '',
//   id,
//   ariaLabel,
//   ordered = false
// }) => {
//   const Tag = ordered ? 'ol' : 'ul';

//   return (
//     <Tag
//       id={id}
//       className={className}
//       aria-label={ariaLabel}
//     >
//       {children}
//     </Tag>
//   );
// };

// interface ListItemProps {
//   children: React.ReactNode;
//   className?: string;
// }

// export const ListItem: React.FC<ListItemProps> = ({
//   children,
//   className = ''
// }) => (
//   <li className={className}>
//     {children}
//   </li>
// );

// interface FigureProps {
//   children: React.ReactNode;
//   caption?: string;
//   className?: string;
//   id?: string;
// }

// export const Figure: React.FC<FigureProps> = ({
//   children,
//   caption,
//   className = '',
//   id
// }) => (
//   <figure id={id} className={className}>
//     {children}
//     {caption && (
//       <figcaption className="text-sm text-gray-600 mt-2">
//         {caption}
//       </figcaption>
//     )}
//   </figure>
// );
