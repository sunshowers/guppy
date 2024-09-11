searchState.loadedDescShard("itertools", 0, "Extra iterator adaptors, functions and macros.\nBoth values are present.\nContinue folding with this value\nA type returned by the <code>diff_with</code> function.\nFold is complete and will return this value\nThe enum <code>Either</code> with variants <code>Left</code> and <code>Right</code> is a general …\nValue that either holds a single A or B, or both.\nThis is the first element.\nThe index of the first non-matching element along with …\nAn enum used for controlling the execution of <code>fold_while</code>.\nAn <code>Iterator</code> blanket implementation that provides extra …\nThis is the last element.\nA value of type <code>L</code>.\nOnly the left value of type <code>A</code> is present.\nThe total number of elements that were in <code>I</code> along with the …\nThis is neither the first nor the last element.\nMore than one element in the iterator, the first element …\n<code>MinMaxResult</code> is an enum returned by <code>minmax</code>.\nAn iterator that can be unzipped into multiple collections.\nEmpty iterator\nIterator with one element, so the minimum and maximum are …\nThis is the only element.\nAn iterator that allows peeking at an element before …\nThe first component of the value yielded by <code>WithPosition</code>. …\nA value of type <code>R</code>.\nOnly the right value of type <code>B</code> is present.\nThe total number of elements that were in <code>J</code> along with the …\nTest whether the predicate holds for all elements in the …\nCheck whether all elements compare equal.\nIf there are elements and they are all equal, return a …\nCheck whether all elements are unique (non equal).\nTest whether the predicate holds for any elements in the …\nConverts from <code>&amp;EitherOrBoth&lt;A, B&gt;</code> to <code>EitherOrBoth&lt;&amp;_, &amp;_&gt;</code> …\nConverts from <code>&amp;mut EitherOrBoth&lt;A, B&gt;</code> to …\nConvert <code>&amp;mut Either&lt;L, R&gt;</code> to <code>Either&lt;&amp;mut L, &amp;mut R&gt;</code>.\nConverts from <code>&amp;mut EitherOrBoth&lt;A, B&gt;</code> to …\nConvert <code>Pin&lt;&amp;mut Either&lt;L, R&gt;&gt;</code> to …\nConvert <code>Pin&lt;&amp;Either&lt;L, R&gt;&gt;</code> to <code>Either&lt;Pin&lt;&amp;L&gt;, Pin&lt;&amp;R&gt;&gt;</code>, …\nConvert <code>&amp;Either&lt;L, R&gt;</code> to <code>Either&lt;&amp;L, &amp;R&gt;</code>.\nConverts from <code>&amp;EitherOrBoth&lt;A, B&gt;</code> to <code>EitherOrBoth&lt;&amp;A, &amp;B&gt;</code>.\nAssert that two iterables produce equal sequences, with …\nIf the iterator yields no elements, <code>Ok(None)</code> will be …\nA “meta iterator adaptor”. Its closure receives a …\nIf <code>Both</code>, return <code>Some</code> containing the left and right values. …\nReturn an iterator adaptor that iterates over the …\nTakes two iterables and creates a new iterator over both …\nChain zero or more iterators together into one sequence.\nReturn an <em>iterable</em> that can group iterator elements. …\nReturn an <em>iterable</em> that can chunk the iterator.\nReturn an iterator over all windows, wrapping back to the …\nCreate an iterator that clones each element from <code>&amp;T</code> to <code>T</code>.\nReturn an iterator adaptor that uses the passed-in closure …\nCollects all items from the iterator into a tuple of a …\n<code>.collect_vec()</code> is simply a type specialization of …\nReturn an iterator adaptor that iterates over the <code>k</code>-length …\nReturn an iterator that iterates over the <code>k</code>-length …\nCombine all an iterator’s elements into one element by …\nCombine all an iterator’s elements into one element by …\nCreate an iterator that maps for example iterators of …\nReturns <code>true</code> if the given item is present in this iterator.\nCollect the items in this iterator and return a <code>HashMap</code> …\nCollect the items in this iterator and return a <code>HashMap</code> …\nRemove duplicates from sections of consecutive identical …\nRemove duplicates from sections of consecutive identical …\nRemove duplicates from sections of consecutive identical …\nRemove duplicates from sections of consecutive identical …\nCompares every element yielded by both <code>i</code> and <code>j</code> with the …\nConsume the first <code>n</code> elements from the iterator eagerly, …\nConsume the last <code>n</code> elements from the iterator eagerly, and …\nReturn an iterator adaptor that produces elements that …\nReturn an iterator adaptor that produces elements that …\nApply one of two functions depending on contents, unifying …\nConvert the contained value into <code>T</code>\nLike <code>either</code>, but provide some context to whichever of the …\nIterate <code>iterable</code> with a running index.\nReturn <code>true</code> if both iterables produce equal sequences …\nIf the iterator yields exactly one element, that element …\nReturns the left value\nReturns the right value\nFactors out a homogenous type from an <code>Either</code> of <code>Result</code>.\nFactor out a homogeneous type from an either of pairs.\nConverts an <code>Either</code> of <code>Iterator</code>s to be an <code>Iterator</code> of <code>Either</code>…\nBorrows an <code>Either</code> of <code>Iterator</code>s to be an <code>Iterator</code> of <code>Either</code>s\nMutably borrows an <code>Either</code> of <code>Iterator</code>s to be an <code>Iterator</code> …\nFactors out <code>None</code> from an <code>Either</code> of <code>Option</code>.\nFactors out a homogenous type from an <code>Either</code> of <code>Result</code>.\nFactor out a homogeneous type from an either of pairs.\nReturn an iterator adaptor that filters and transforms …\nReturn an iterator adaptor that filters every <code>Result::Ok</code> …\nFind the value of the first element satisfying a predicate …\nFind the value of the first element satisfying a predicate …\nFind the position and value of the first element …\nReturn an iterator adaptor that flattens every <code>Result::Ok</code> …\nConvert <code>Either&lt;L, R&gt;</code> to <code>Either&lt;R, L&gt;</code>.\nConvert <code>EitherOrBoth&lt;A, B&gt;</code> to <code>EitherOrBoth&lt;B, A&gt;</code>.\nPerform a fold operation over the iterable.\nAccumulator of the elements in the iterator.\nFold <code>Result</code> values from an iterator.\nFold <code>Option</code> values from an iterator.\nAn iterator method that applies a function, producing a …\nFormat all iterator elements, separated by <code>sep</code>.\nFormat all iterator elements, separated by <code>sep</code>.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns an iterator over a subsection of the iterator.\nSee <code>.chunk_by()</code>.\nIf <code>Left</code>, or <code>Both</code>, return true. Otherwise, return false.\nIf <code>Right</code>, or <code>Both</code>, return true, otherwise, return false.\nSet <code>self</code> to <code>Both(..)</code>, containing the specified left and …\nSets the <code>left</code> value of this instance, and returns a …\nSets the <code>right</code> value of this instance, and returns a …\nCreate an iterator that interleaves elements in <code>i</code> and <code>j</code>.\nAlternate elements from two iterators until both have run …\nAlternate elements from two iterators until at least one …\nIterate <code>iterable</code> with a particular value inserted between …\nAn iterator adaptor to insert a particular value between …\nIterate <code>iterable</code> with a particular value created by a …\nAn iterator adaptor to insert a particular value created …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn a <code>HashMap</code> of keys mapped to <code>Vec</code>s of values. Keys …\nReturn an <code>Iterator</code> on a <code>HashMap</code>. Keys mapped to <code>Vec</code>s of …\nConstructs a <code>GroupingMap</code> to be used later with one of the …\nConstructs a <code>GroupingMap</code> to be used later with one of the …\nExtract the value of an either over two equivalent types.\nReturn the value in the continue or done.\nConvert the inner value to an iterator.\nIf <code>Left</code> or <code>Both</code>, return the left value. Otherwise, convert …\n<code>into_option</code> creates an <code>Option</code> of type <code>(T, T)</code>. The returned …\nIf <code>Right</code> or <code>Both</code>, return the right value. Otherwise, …\nCreate an iterator over the “cartesian product” of …\nIf <code>Both</code>, return true. Otherwise, return false.\nReturn true if <code>self</code> is <code>Done</code>, false if it is <code>Continue</code>.\nReturn true if the value is the <code>Left</code> variant.\nIf <code>Left</code>, return true. Otherwise, return false. Exclusive …\nReturn true if the value is the <code>Right</code> variant.\nIf <code>Right</code>, return true. Otherwise, return false. Exclusive …\nBorrow the inner value as an iterator.\nMutably borrow the inner value as an iterator.\nCreates a new iterator that infinitely applies function to …\nCreate an iterator running multiple iterators in lockstep.\nCombine all iterator elements into one <code>String</code>, separated …\nCombine all iterator elements into one <code>String</code>, separated …\nIf <code>Left</code>, return <code>Some</code> with the left value. If <code>Right</code> or <code>Both</code>…\nIf <code>Right</code>, return <code>Some</code> with the right value. If <code>Left</code> or <code>Both</code>…\nSort the k largest elements into a new iterator, in …\nSort the k largest elements into a new iterator using the …\nReturn the elements producing the k largest outputs of the …\nSort the k smallest elements into a new iterator, in …\nSort the k smallest elements into a new iterator using the …\nReturn the elements producing the k smallest outputs of …\nCreate an iterator that merges elements of the contained …\nReturn an iterator adaptor that flattens an iterator of …\nCreate an iterator that merges elements of the contained …\nReturn an iterator adaptor that flattens an iterator of …\nConvert the left side of <code>Either&lt;L, R&gt;</code> to an <code>Option&lt;L&gt;</code>.\nIf <code>Left</code>, or <code>Both</code>, return <code>Some</code> with the left value. …\nReturn tuple of options corresponding to the left and …\nApply the function <code>f</code> on the value in the <code>Left</code> variant if …\nApply the function <code>f</code> on the value <code>a</code> in <code>Left(a)</code> or …\nReturn left value or given value\nReturn left or a default\nReturns left value or computes it from a closure\nReturns a mutable reference to the left value. If the left …\nIf the left value is not present, replace it the value …\nMap <code>f</code> over the contained value and return the result in the\nApply the functions <code>f</code> and <code>g</code> on the value <code>a</code> and <code>b</code> …\nApply the functions <code>f</code> and <code>g</code> to the <code>Left</code> and <code>Right</code> variants …\nSimilar to <code>map_either</code>, with an added context <code>ctx</code> …\nConvert each item of the iterator using the <code>Into</code> trait.\nApply the function <code>f</code> on the value in the <code>Left</code> variant if …\nApply the function <code>f</code> on the value <code>a</code> in <code>Left(a)</code> or …\nReturn an iterator adaptor that applies the provided …\nApply the function <code>f</code> on the value in the <code>Right</code> variant if …\nApply the function <code>f</code> on the value <code>b</code> in <code>Right(b)</code> or …\nReturn the maximum value of the iterable.\nReturn all maximum elements of an iterator.\nReturn all maximum elements of an iterator, as determined …\nReturn all maximum elements of an iterator, as determined …\nCreate an iterator that merges elements in <code>i</code> and <code>j</code>.\nReturn an iterator adaptor that merges the two base …\nReturn an iterator adaptor that merges the two base …\nReturn an iterator adaptor that merge-joins items from the …\nCreate an iterator that merges items from both this and …\nReturn the minimum value of the iterable.\nReturn all minimum elements of an iterator.\nReturn all minimum elements of an iterator, as determined …\nReturn all minimum elements of an iterator, as determined …\nReturn the minimum and maximum elements in the iterator.\nReturn the minimum and maximum element of an iterator, as …\nReturn the minimum and maximum element of an iterator, as …\nReturn an iterator adaptor that iterates over the …\nAn iterator adaptor that allows the user to peek at …\nAn iterator adaptor that allows the user to peek at …\nConverts an iterator of tuples into a tuple of containers.\nUnzip this iterator into multiple collections.\nConverts an iterator of tuples into a tuple of containers.\nAn iterator that generalizes <code>.zip()</code> and allows running …\nAdvances the iterator and returns the next items grouped …\nReturns a tuple consisting of the <code>l</code> and <code>r</code> in <code>Both(l, r)</code>, …\nReturns a tuple consisting of the <code>l</code> and <code>r</code> in <code>Both(l, r)</code>, …\nReturns a tuple consisting of the <code>l</code> and <code>r</code> in <code>Both(l, r)</code>, …\nReturn an iterator adaptor that pads the sequence to a …\nPartition a sequence using predicate <code>pred</code> so that elements …\nCollect all iterator elements into one of two partitions. …\nPartition a sequence of <code>Result</code>s into one list of all the <code>Ok</code>…\nA drop-in replacement for <code>std::iter::Peekable</code> which adds a …\nPass a reference to the next iterator element to the …\nReturn an iterator adaptor that borrows from this iterator …\nReturn an iterator adaptor that iterates over all …\nReturn the position of the maximum element in the iterator.\nReturn the position of the maximum element in the …\nReturn the position of the maximum element in the …\nReturn the position of the minimum element in the iterator.\nReturn the position of the minimum element in the …\nReturn the position of the minimum element in the …\nReturn the positions of the minimum and maximum elements in\nReturn the postions of the minimum and maximum elements of …\nReturn the postions of the minimum and maximum elements of …\nReturn an iterator adaptor that yields the indices of all …\nReturn an iterator that iterates through the powerset of …\n“Lift” a function of the values of an iterator so that …\n“Lift” a function of the values of the current …\nIterate over the entire iterator and multiply all the …\nCreate an iterator where you can put back a single item\nCreate an iterator where you can put back multiple values …\nReturn an iterator inside a <code>Rc&lt;RefCell&lt;_&gt;&gt;</code> wrapper.\nReturn either value of left, right, or apply a function <code>f</code> …\nCreate an iterator that produces <code>n</code> repetitions of <code>element</code>.\nIterate <code>iterable</code> in reverse.\nConvert the right side of <code>Either&lt;L, R&gt;</code> to an <code>Option&lt;R&gt;</code>.\nIf <code>Right</code>, or <code>Both</code>, return <code>Some</code> with the right value. …\nApply the function <code>f</code> on the value in the <code>Right</code> variant if …\nApply the function <code>f</code> on the value <code>b</code> in <code>Right(b)</code> or …\nReturn right value or given value\nReturn right or a default\nReturns right value or computes it from a closure\nReturns a mutable reference to the right value. If the …\nIf the right value is not present, replace it the value …\nAssign to each reference in <code>self</code> from the <code>from</code> iterator, …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nSort all iterator elements into a new iterator in …\nThe concrete iterator types.\nIterate over the entire iterator and add all the elements.\nConsumes the iterator and return an iterator of the last <code>n</code> …\nReturns an iterator adaptor that consumes elements while …\nReturn an iterator adaptor that borrows from a <code>Clone</code>-able …\nSplit into an iterator pair that both yield all elements …\nTraits helpful for using certain <code>Itertools</code> methods in …\nSee <code>.tree_reduce()</code>.\nAccumulate the elements in the iterator in a tree-like …\n<code>.try_collect()</code> is more convenient way of writing …\nReturns the length of the iterator if one exists. …\nReturn an iterator adaptor that iterates over the …\nReturn an iterator over all contiguous windows producing …\nReturn an iterator that groups the items in tuples of a …\nCreates a new unfold source with the specified closure as …\nReturn an iterator adaptor that filters out elements that …\nReturn an iterator adaptor that filters out elements that …\nReturns the left value\nReturns the right value\nReturn an iterator adaptor that applies a mutating function\nReturn an iterator adaptor that filters <code>Option&lt;A&gt;</code> iterator …\nReturn an iterator adaptor that combines each element with …\nConverts the arguments to iterators and zips them.\nZips two iterators but <strong>panics</strong> if they are not of the same …\nCreate an iterator which iterates over both this and the …\nCreate an iterator which iterates over both this and the …\nA “meta iterator adaptor”. Its closure receives a …\nAn iterator for the elements in a single chunk.\n<code>ChunkBy</code> is the storage for the lazy grouping operation.\nAn iterator that yields the Chunk iterators.\nAn iterator over all windows, wrapping back to the first …\nAn iterator adaptor that may join together adjacent …\nAn iterator to iterate through all the <code>k</code>-length …\nAn iterator to iterate through all the <code>n</code>-length …\nAn iterator that maps an iterator of tuples like …\nAn iterator adaptor that removes repeated duplicates.\nAn iterator adaptor that removes repeated duplicates, …\nAn iterator adaptor that removes repeated duplicates, …\nAn iterator adaptor that removes repeated duplicates, …\nAn iterator adapter to filter out duplicate elements.\nAn iterator adapter to filter for duplicate elements.\nIterator returned for the error case of …\nAn iterator adapter to filter and apply a transformation …\nAn iterator adapter to filter values within a nested …\nAn iterator adaptor that flattens <code>Result::Ok</code> values and …\nFormat all iterator elements lazily, separated by <code>sep</code>.\nFormat all iterator elements lazily, separated by <code>sep</code>.\nAn iterator for the elements in a single group.\nSee <code>ChunkBy</code>.\n<code>GroupingMap</code> is an intermediate struct for efficient …\n<code>GroupingMapBy</code> is an intermediate struct for efficient …\nAn iterator that yields the Group iterators.\nAn iterator adaptor that alternates elements from two …\nAn iterator adaptor that alternates elements from the two …\nAn iterator adaptor to insert a particular value between …\nAn iterator adaptor to insert a particular value created …\n<code>ChunkLazy</code> is the storage for a lazy chunking operation.\nAn iterator that infinitely applies function to value and …\nAn iterator adaptor that merges an abitrary number of base …\nAn iterator adaptor that merges an abitrary number of base …\nAn iterator adapter to apply <code>Into</code> conversion to each …\nAn iterator adapter to apply a transformation within a …\nAn iterator adaptor that merges the two base iterators in …\nAn iterator adaptor that merges the two base iterators in …\nAn iterator adaptor that merge-joins items from the two …\nSee <code>multipeek()</code> for more information.\nAn iterator adaptor that iterates over the cartesian …\nAn iterator adaptor that pads a sequence to a minimum …\nSee <code>peek_nth()</code> for more information.\nAn iterator adaptor that takes items while a closure …\nAn iterator adaptor that iterates through all the <code>k</code>…\nAn iterator adapter to get the positions of each element …\nAn iterator to iterate through the powerset of the …\nAn iterator that produces only the <code>T</code> values as long as the …\nAn iterator adaptor that iterates over the cartesian …\nAn iterator adaptor that allows putting back a single item …\nAn iterator adaptor that allows putting multiple items in …\nA wrapper for <code>Rc&lt;RefCell&lt;I&gt;&gt;</code>, that implements the <code>Iterator</code> …\nAn iterator that produces <em>n</em> repetitions of an element.\nAn iterator adaptor that consumes elements while the given …\nAn iterator adaptor that borrows from a <code>Clone</code>-able iterator\nOne half of an iterator pair where both return the same …\nAn iterator over a incomplete tuple.\nAn iterator to iterate through all combinations in a <code>Clone</code>…\nAn iterator over all contiguous windows that produces …\nAn iterator that groups the items in tuples of a specific …\nSee <code>unfold</code> for more information.\nAn iterator adapter to filter out duplicate elements.\nAn iterator adapter to filter out duplicate elements.\nAn iterator adapter to apply a mutating function to each …\nAn iterator adaptor that filters <code>Option&lt;A&gt;</code> iterator …\nAn iterator adaptor that wraps each element in an <code>Position</code>.\nSee <code>multizip</code> for more information.\nAn iterator which iterates two other iterators …\nAn iterator which iterates two other iterators …\nThis is the generic way to perform any operation on a …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nSee <code>.reduce()</code>.\nGroups elements from the <code>GroupingMap</code> source by key and …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturn a buffer with the produced items that was not …\nSplit the <code>PutBack</code> into its parts.\nReturns the length of a combination produced by this …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nGroups elements from the <code>GroupingMap</code> source by key and …\nReturns the (current) length of the pool from which …\nWorks exactly like the <code>next_if</code> method in …\nWorks exactly like the <code>next_if_eq</code> method in …\nWorks exactly like <code>.next()</code> with the only difference that …\nWorks exactly like the <code>peek</code> method in <code>std::iter::Peekable</code>.\nWorks exactly like the <code>peek_mut</code> method in …\nReturns a reference to the <code>nth</code> value without advancing the …\nReturns a mutable reference to the <code>nth</code> value without …\nGroups elements from the <code>GroupingMap</code> source by key and …\nPut back a single value to the front of the iterator.\nPuts <code>x</code> in front of the iterator.\nThe boxed iterator.\nGroups elements from the <code>GroupingMap</code> source by key and …\nReset the peeking “cursor”\nInternal state that will be passed to the closure on the …\nGroups elements from the <code>GroupingMap</code> source by key and …\nput back value <code>value</code> (builder method)\nImplemented for homogeneous tuples of size up to 12.\nUsed by <code>Itertools::get</code> to know which iterator to turn …\nThe type returned for this type of index.\nReturns an adapted iterator for the current index.")