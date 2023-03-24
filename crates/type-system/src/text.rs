use std::{borrow::Borrow, hash::Hash};

/// Trait that expresses owned or borrowed text.
pub trait Text<'a>: Eq + Clone + Hash + Borrow<str> + From<&'a str> {}

impl<'a> Text<'a> for &'a str {}

impl Text<'static> for String {}