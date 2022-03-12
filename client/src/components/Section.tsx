import React from "react";

export interface Props {
  header?: string;
  id: string;
  children: React.ReactNode;
  ignoreHeader?: boolean;
}

export function Section(props: Props) {
  return (
    <section id={props.id} className="mt-10">
      <article className="prose lg:prose-xl">
        {!props.ignoreHeader && <h2>{props.header}</h2>}
        {props.children}
      </article>
    </section>
  );
}
