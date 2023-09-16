import Image from "next/image";
import LogoImage from "../../../public/nitrogql-logo.png";
import styles from "./page.module.css";
import { Figures } from "@/app/_utils/Figures";
import figureCheckSchema from "./figures/screenshot-check-schema.png";
import figureCheckOperation from "./figures/screenshot-check-operation.png";
import figurePeekOperationDefinition from "./figures/screenshot-peek-operation-definition.png";
import figurePeekSchema from "./figures/screenshot-peek-schema.png";
import figurePeekDescription from "./figures/screenshot-peek-description.png";
import { Highlight } from "../_utils/Highlight";
import { HeadNav } from "../_utils/Header";
import { Footer } from "../_utils/Footer";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <hgroup>
          <p>
            <Image src={LogoImage} alt="nitrogql logo" />
          </p>
          <h1>
            <span>nitrogql</span>
          </h1>
          <p>
            GraphQL + TypeScript <wbr />
            Done Right.
          </p>
        </hgroup>
      </header>
      <HeadNav />
      <main className={styles.main}>
        <p>
          <b>nitrogql</b> is a toolchain for using GraphQL in TypeScript
          projects. It can <strong>generate TypeScript types</strong> from your
          GraphQL schema and queries, and also{" "}
          <strong>provides static checking</strong> for your queries.
        </p>
        <section className={styles.features}>
          <h2>✨ Available Features</h2>
          <h3>Static Checks for GraphQL</h3>
          <p>
            nitrogql CLI can perform static checks for your GraphQL schema and
            operations. They are helpful for catching GraphQL-related errors
            before you run your code.
          </p>
          <p>
            Add nitrogql to your CI pipeline so that you never see GraphQL
            errors at runtime.
          </p>
          <Figures>
            <figure>
              <Image
                src={figureCheckSchema}
                alt="Screenshot of console in which `nitrogql check` is run.
                  The output shows an error message saying `Type 'Strong' is not defined`
                  for the line `body: Strong!` in the schema.
                "
              />
              <figcaption>
                nitrogql can find mistakes in your schema definition.
              </figcaption>
            </figure>
            <figure>
              <Image
                src={figureCheckOperation}
                alt="Screenshot of console in which `nitrogql check` is run.
                  The output shows an error message saying Field 'next' is not found on type 'Todo'`
                  for the line `text` in a query operation.
                "
              />
              <figcaption>
                nitrogql can also check your operations against the schema.
              </figcaption>
            </figure>
          </Figures>

          <h3>TypeScript Type Generation</h3>
          <p>
            nitrogql CLI can generate sophisticated TypeScript types from your
            schema and operations. This is useful for writing type-safe code
            with GraphQL.
          </p>
          <p>
            Notably, types generated by nitrogql support source maps. This means
            that Peek Definition and Go to Definition features in your editor
            will guide you to the original GraphQL code rather than the
            generated TypeScript code.
          </p>
          <p>
            Currently, nitrogql supports generating types for both server-side
            code and client-side code. For client-side code, generated types can
            be used regardless of UI libraries and with most of GraphQL client
            libraries without any additional setup, thanks to{" "}
            <a
              href="https://github.com/dotansimha/graphql-typed-document-node"
              target="_blank"
            >
              TypedDocumentNode
            </a>
            .
          </p>
          <Figures>
            <figure>
              <Image
                src={figurePeekOperationDefinition}
                alt="Screenshot of 'Peek Definition' usage in VS Code. Original GraphQL code is
                  shown as a definition of a mutation operation document."
              />
              <figcaption>
                Generated source maps let you see the original GraphQL code as a
                definition of GraphQL operations.
              </figcaption>
            </figure>
            <figure>
              <Image
                src={figurePeekSchema}
                alt="Screenshot of 'Peek Definition' usage in VS Code. For data fetched from
                  the GraphQL server, GraphQL schema is shown as a definition of its type."
              />
              <figcaption>
                For fetched data, you can see GraphQL schema as its definition.
              </figcaption>
            </figure>
            <figure>
              <Image
                src={figurePeekDescription}
                alt="Screenshot of VSCode's hover tooltip showing a description of a field
                  along with its type."
              />
              <figcaption>
                nitrogql&apos;s sophisticatedly crafted type also includes
                descriptions of fields. (Note: this features is not available
                for aliased fields. )
              </figcaption>
            </figure>
          </Figures>
          <h3>Loaders for GraphQL files</h3>
          <p>
            For client-side code, nitrogql recommends importing{" "}
            <code>.graphql</code> files directly from <code>.ts</code> files:
          </p>
          <Highlight language="typescript">
            import MyQuery from &quot;./query.graphql&quot;;
          </Highlight>
          <p>
            To support this, nitrogql provides a webpack loader and a rollup
            plugin that allow importing from <code>.graphql</code> files. Behind
            the scenes, these loaders convert a GraphQL operation into
            pre-compiled DocumentNode so that it matches the type definitions
            generated by nitrogql.
          </p>
          <p>
            The webpack loader can cover webpack and compatible tools, including
            Next.js, turbopack and others. The rollup plugin can cover rollup
            and compatible tools, including Vite.
          </p>
        </section>

        <section className={styles.features}>
          <h2>🛣 On the Roadmap</h2>

          <p>
            There is no features that are declared to be on the roadmap. We are
            considering what to develop next.
          </p>
        </section>

        <section className={styles.features}>
          <h2>🤔 Under Consideration</h2>

          <h3>Fragment Colocation</h3>
          <p>
            Currently nitrogql CLI does not support fragment colocation.
            Fragments must be defined in the same file as the operation that
            uses them.
          </p>
          <p>
            We are still investigating what is the best developer experience
            regarding fragment colocation.
          </p>

          <h3>Plugin System</h3>
          <p>
            We are considering adding a plugin system to nitrogql CLI. We are
            planning to add more opinionated features to nitrogql, so these
            features are good to be implemented as plugins. Also, plugins will
            be helpful for extending nitrogql to support more use cases.
          </p>

          <h3>Watch Mode</h3>
          <p>
            Currently nitrogql CLI does not support watch mode. We are
            considering adding watch mode to the CLI. However, nitrogql is fast
            enough to run every time you save a file, so we are not sure if
            watch mode is really necessary.
          </p>

          <h3>Editor Integration</h3>
          <p>
            Editor integration will be helpful for efficient editing experience.
            However, we give low priority to editor integration because there
            are already many good editor plugins for GraphQL.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
