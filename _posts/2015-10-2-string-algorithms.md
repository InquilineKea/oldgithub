# Test Driving 3 String Algorithms in Ruby

I recently worked my way through Cracking The Coding Interview and found the practice problems useful. Here are examples of 3. I encourage you to try copy the tests and try the examples out before looking at the answers. As a side note, the questions and their tests can be found [on github](https://github.com/squanto/string_algorithms).

[introduction to rspec](http://blog.teamtreehouse.com/an-introduction-to-rspec)

1. Design a method to determine if a string has all unique characters.

Let’s start with some basic tests for a truth case and a false case.

  <pre>
    describe '.uniq?' do
      it 'works for a unique string' do
        expect(Inspector.uniq?('abc')).to be true
      end

      it 'works for a repeating string' do
        expect(Inspector.uniq?('abcabc')).to be false
      end
    end
  </pre>

Now let’s talk about the implementation. Remember to try out the implementation before checking out this one.


  <pre>
    def uniq?(str)
      letters = {}
      str.each_char do |c|
        if letters[c].nil?
          letters[c] = true
        else
          return false
        end
      end

      true
    end
  </pre>

This method builds a hash map of letters, with the character being the key and a boolean or nil. As it iterates
over the input string, the hash map for each character gets assigned to true, and the loop breaks on the first case
of an repeating key value pair.

2. Reverse a string (without additional data structures).

Let's again start with tests for reversing a string.


  <pre>
    describe '.reverse' do
      it 'reverses strings' do
        expect(Inspector.reverse('foobar')).to eq 'raboof'
        expect(Inspector.reverse('hugo')).to eq 'oguh'
      end
    end
  </pre>

Now for the implementation.


  <pre>
    def reverse(str)
      new_string = ''
      str.each_char { |c| new_string.prepend(c) }
      new_string
    end
  </pre>

Ignoring the fact that ruby has a built in reverse method, this version is not ideal
because it introduces a new string. Below is a version that rotates the string characters in place.


  <pre>
    def reverse(str)
      mid_length = str.length / 2

      1.upto(mid_length) do |i|
        left_char = str[i - 1]
        right_char = str[-i]

        str[i - 1] = right_char
        str[-i] = left_char
      end
      str
    end
  </pre>

It simply swaps characters starting with the first and last pair and working its way towards the middle of the string from either end.

3. Write a method that determines if 2 strings are permutations.
Again, let's start with some tests of the method's desired behavior.

  <pre>
    describe '.permutations?' do
      it 'returns true for permutations' do
        expect(Inspector.permutations?('abc', 'cba')).to be true
        expect(Inspector.permutations?('foobar', 'barfoo')).to be true
      end

      it 'returns false for non-permutations' do
        expect(Inspector.permutations?('abcd', 'abc')).to be false
        expect(Inspector.permutations?('fbar', 'foobaz')).to be false
      end

      it 'accounts for whitespace' do
        expect(Inspector.permutations?('abc ', 'abc')).to be false
      end
    end
  </pre>

And now for the implementation,


  <pre>
    def permutations?(string_a, string_b)
      char_map = string_a.split('')
      string_b.each_char { |c| char_map.delete(c) }
      char_map.empty?
    end
  </pre>

In 3 steps, this method breaks the first string into an array of it's characters. It then deletes each character in that array as it finds the character in the second string. It then checks if character array is empty.

4. TODO: add the 4th one here

Incrementally test-driving aglorithms is a useful way to break down a problem into smaller parts. It's also a perfect opportunity to translate the english of a coding problem into working code, which verfies understanding of the problem and goal. Hopefully this is useful to you as a process when practicing coding interview questions. If you notice any errors, or you've got a simpler / faster implementation of one of the solutions, comment below.
