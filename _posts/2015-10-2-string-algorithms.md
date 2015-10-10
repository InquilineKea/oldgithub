---
layout: post
title: Test Driving 4 String Algorithms in Ruby
---

<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.3/gist-embed.min.js"></script>

I've been working my way through [Cracking The Coding Interview](http://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X) and found the practice problems useful. Here are 4 of them with spec examples. I encourage you to try copy the tests and try the examples out before looking at the answers. You can find the full set of specs [on github](https://gist.github.com/squanto/db61fa70a3f8552d1a6e).

1. Design a method to determine if a string has all unique characters.

Let’s start with some basic tests for a truth case and a false case.

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="4-12" data-gist-hide-footer="true"></code>

Now let’s talk about the implementation. Remember to try out the implementation before checking out this one.

<code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="48-59" data-gist-hide-footer="true"></code>

This method builds a hash map of letters, with the character being the key and a boolean or nil. As it iterates
over the input string, the hash map for each character gets assigned to true, and the loop breaks on the first case
of an repeating key value pair.


2. Reverse a string (without additional data structures).

Let's again start with tests for reversing a string.

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="14-19" data-gist-hide-footer="true"></code>

Now for a basic implementation,

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="61-65" data-gist-hide-footer="true"></code>

Ignoring the fact that ruby has a built in reverse method, this version is not ideal
because it introduces a new string. Below is a version that reverses the string characters in place.

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="67-78" data-gist-hide-footer="true"></code>

It simply swaps characters starting with the first and last pair and working its way towards the middle of the string from either end.

3. Write a method that determines if 2 strings are permutations.
Again, let's start with some tests of the method's desired behavior.

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="21-36" data-gist-hide-footer="true"></code>

And now for the implementation,

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="80-82" data-gist-hide-footer="true"></code>

In 3 steps, this method breaks the first string into an array of it's characters. It then deletes each character in that array as it finds the character in the second string. It then checks if character array is empty.

4. Write a method that compresses a string based on the counts of repeated charaters. For example,

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="38-42" data-gist-hide-footer="true"></code>

Here is an implementation that iterates over the input, alternating between incrementing the count and resetting it while building up the output string.

  <code data-gist-id="db61fa70a3f8552d1a6e" data-gist-line="84-102" data-gist-hide-footer="true"></code>

Incrementally test-driving aglorithms is a useful way to break down a problem into smaller parts. It's also a perfect opportunity to translate the english of a coding problem into working code, which verfies understanding of the problem and goal. Hopefully this is useful to you as a process when practicing coding interview questions.
