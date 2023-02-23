#[cfg(test)]
mod operation {
    use insta::assert_snapshot;

    use crate::{
        graphql_parser::parser::parse_operation_document, graphql_printer::GraphQLPrinter,
        source_map_writer::just_writer::JustWriter,
    };

    #[test]
    fn simple_query() {
        assert_snapshot!(print_graphql(
            parse_operation_document("query { foo bar }").unwrap()
        ))
    }
    #[test]
    fn query_with_name() {
        assert_snapshot!(print_graphql(
            parse_operation_document(
                "
                query sample {
                    foo
                    bar {
                        nested1
                        nested2
                    }
                 }
"
            )
            .unwrap()
        ))
    }
    #[test]
    fn query_with_variables() {
        assert_snapshot!(print_graphql(
            parse_operation_document(
                "
                query sample($foo: Int!, $bar: Int!) {
                    foo @dedede(foo: $foo)
                 }
"
            )
            .unwrap()
        ))
    }

    #[test]
    fn query_with_directives() {
        assert_snapshot!(print_graphql(
            parse_operation_document(
                "
                query sample($foo: [Int!]!) @a @b(c: D) {
                    foo
                    bar
                 }
"
            )
            .unwrap()
        ))
    }

    #[test]
    fn mutation_with_fragment() {
        assert_snapshot!(print_graphql(
            parse_operation_document(
                "
                mutation($foo: Boolean) {
                    foo
                    ...Fragment
                }
                "
            )
            .unwrap()
        ))
    }
    #[test]
    fn subscription_with_inline_fragment() {
        assert_snapshot!(print_graphql(
            parse_operation_document(
                "
                subscription a {
                    foo
                    ... on F {
                        bar
                        baz
                    }
                }
                "
            )
            .unwrap()
        ));
    }

    fn print_graphql<T: GraphQLPrinter>(value: T) -> String {
        let mut result = String::new();
        let mut writer = JustWriter::new(&mut result);
        value.print_graphql(&mut writer);
        result
    }
}