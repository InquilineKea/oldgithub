---
layout: post
title: Test Driving 4 String Algorithms in Ruby
---

I've been working my way through [Cracking The Coding Interview](http://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/098478280X) and found the practice problems useful. Here are 4 of them with spec examples. I encourage you to try copy the tests and try the examples out before looking at the answers. You can find the full set of specs [on github](https://gist.github.com/squanto/db61fa70a3f8552d1a6e).

1. Design a method to determine if a string has all unique characters.

Let’s start with some basic tests for a truth case and a false case.

  {% highlight ruby linenos %}
  describe '.uniq?' do
    it 'works for a unique string' do
      expect(Inspector.uniq?('abc')).to be true
    end

    it 'works for a repeating string' do
      expect(Inspector.uniq?('abcabc')).to be false
    end
  end{% endhighlight %}

Now let’s talk about the implementation. Remember to try out the implementation before checking out this one.

  {% highlight ruby linenos %}
  def uniq?(str)
    letters = {}
    str.each_char do |letter|
      return false unless letters[letter].nil?
      letters[letter] = true
    end
    true
  end{% endhighlight %}

This method builds a hash map of letters, with the character being the key and a boolean or nil. As it iterates
over the input string, the hash map for each character gets assigned to true, and the loop breaks on the first case
of an repeating key value pair.


2. Reverse a string (without additional data structures).

Let's again start with tests for reversing a string.

  {% highlight ruby linenos %}
  describe '.reverse' do
    it 'reverses strings' do
      expect(Inspector.reverse('foobar')).to eq 'raboof'
      expect(Inspector.reverse('hugo')).to eq 'oguh'
    end
  end{% endhighlight %}


Now for a basic implementation,

  {% highlight ruby linenos %}
  def reverse(str)
    new_string = ''
    str.each_char { |c| new_string.prepend(c) }
    new_string
  end{% endhighlight %}

Ignoring the fact that ruby has a built in reverse method, this version is not ideal
because it introduces a new string. Below is a version that reverses the string characters in place.

  {% highlight ruby linenos %}
  def reverse(str)
    mid_length = str.length / 2

    1.upto(mid_length) do |i|
      left_char = str[i - 1]
      right_char = str[-i]

      str[i - 1] = right_char
      str[-i] = left_char
    end
    str
  end{% endhighlight %}


It simply swaps characters starting with the first and last pair and working its way towards the middle of the string from either end.

3. Write a method that determines if 2 strings are permutations.
Again, let's start with some tests of the method's desired behavior.

  {% highlight ruby linenos %}
  describe '.permutations?' do
    it 'returns true for permutations' do
      expect(Inspector.permutations?('abc', 'cba')).to be true
      expect(Inspector.permutations?('foobar', 'barfoo')).to be true
    end

    it 'returns false for non-permutations' do
      expect(Inspector.permutations?('abcd', 'abc')).to be false
      expect(Inspector.permutations?('fbar', 'foobaz')).to be false
      expect(Inspector.permutations?('foo', 'foobaz')).to be false
    end

    it 'accounts for whitespace' do
      expect(Inspector.permutations?('abc ', 'abc')).to be false
    end
  end{% endhighlight %}

and the implementation,

  {% highlight ruby linenos %}
  def permutations?(string_a, string_b)
    string_a.split('').sort.join == string_b.split('').sort.join
  end{% endhighlight %}

In 3 steps, this method breaks the first string into an array of it's characters. It then deletes each character in that array as it finds the character in the second string. It then checks if character array is empty.

4. Write a method that compresses a string based on the counts of repeated charaters. For example,

  {% highlight ruby linenos %}
  describe '.compress' do
    it 'compresses strings using the counts of repeated characters' do
      expect(Inspector.compress('aabcccccaaa')).to eq 'a2b1c5a3'
    end
  end{% endhighlight %}

Here is an implementation that iterates over the input, alternating between incrementing the count and resetting it while building up the output string.

  {% highlight ruby linenos %}
  def compress(str)
    output = ""

    char = str[0]
    count = 0
    str << " "

    str.each_char do |c|
      if char != c
        output << "#{char}#{count}"
        count = 1
        char = c
      else
        count += 1
      end
    end

    output
  end{% endhighlight %}

Incrementally test-driving aglorithms is a useful way to break down a problem into smaller parts. It's also a perfect opportunity to translate the english of a coding problem into working code, which verfies understanding of the problem and goal. Hopefully this is useful to you as a process when practicing coding interview questions.
