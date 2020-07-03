defmodule ExampleTest do
  use ExUnit.Case

  test "the addition of two numbers" do
    assert Example.add(2, 3) == 5
  end

  test "the subtraction of two numbers" do
    assert Example.subtract(2, 3) == -1
  end
end
