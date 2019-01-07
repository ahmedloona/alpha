# # Topics
#
# * modules
# * strings
#
# # Pig Latin
#
# Pig Latin is a made-up children's language that's intended to be
# confusing. It obeys a few simple rules (below) but when it's spoken
# quickly it's really difficult for non-children (and non-native
# speakers) to understand.
#
# Rule 1: If a word begins with a vowel sound, add an "ay" sound to
# the end of the word.
#
# Rule 2: If a word begins with a consonant sound, move it to the end
# of the word, and then add an "ay" sound to the end of the word.
#
# (There are a few more rules for edge cases, and there are regional
# variants too, but that should be enough to understand the tests.)
#
# See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

require "04_pig_latin"

describe "first_vowel_index" do
  it "returns the index of the first vowel when word starts with vowel" do
    result = first_vowel_index("apple")
    expect(result).to eq(0)
  end

  it "returns the index to the first vowel when word starts with consonant" do
    result = first_vowel_index("banana")
    expect(result).to eq(1)
  end

  it "returns nil when there is no vowel in word" do
    result = first_vowel_index("zzyyzx")
    expect(result).to eq(nil)
  end
end

describe "#translate" do
  it "translates a word beginning with a vowel" do
    s = translate("apple")
    expect(s).to eq("appleay")
  end

  it "translates a word beginning with a consonant" do
    s = translate("banana")
    expect(s).to eq("ananabay")
  end

  it "translates a word beginning with two consonants" do
    s = translate("cherry")
    expect(s).to eq("errychay")
  end

  it "translates two words" do
    s = translate("eat pie")
    expect(s).to eq("eatay iepay")
  end

  it "translates a word beginning with three consonants" do
    expect(translate("three")).to eq("eethray")
  end

  it "counts 'sch' as a single phoneme" do
    s = translate("school")
    expect(s).to eq("oolschay")
  end

  it "counts 'qu' as a single phoneme" do
    s = translate("quiet")
    expect(s).to eq("ietquay")
  end

  it "counts 'qu' as a consonant even when it's preceded by a consonant" do
    s = translate("square")
    expect(s).to eq("aresquay")
  end

  it "translates many words" do
    s = translate("the quick brown fox")
    expect(s).to eq("ethay ickquay ownbray oxfay")
  end

  it "translates words beginning with a uppercase vowel" do
    s = translate("Ahmed is a boy")
    expect(s).to eq("Ahmeday isay aay oybay")
  end

  it "keeps capitalized words capitalized" do
    s = translate("The quick Brown fox")
    expect(s).to eq("Ethay ickquay Ownbray oxfay")
  end

  it "keeps capitalized words capitalized" do
    s = translate("Hi.")
    expect(s).to eq("Ihay.")
  end

  it "does not translate words without vowels" do
    s = translate("zzyyzx")
    expect(s).to eq("zzyyzx")
  end

  it "does not translate words without vowels" do
    s = translate("zzyyzx Banana")
    expect(s).to eq("zzyyzx Ananabay")
  end

  it "handles words with punctuation" do
    s = translate("Hi. I am Ahmed;")
    expect(s).to eq("Ihay. Iay amay Ahmeday;")
  end

  # Test-driving bonus:
  # * write a test asserting that capitalized words are still capitalized (but with a different initial capital letter, of course)
  # * retain the punctuation from the original phrase
end
