import { ReactNode } from "react";

function Section(props: { withMaxWidth?: boolean; children: ReactNode }) {
  return (
    <section>
      <section
        className={`${
          props.withMaxWidth ? "max-w-[1024px] m-auto" : ""
        } md:px-[48px] px-[24px] lg:px-[24px]`}
      >
        {props.children}
      </section>
    </section>
  );
}

export default Section;
