<?php declare(strict_types=1);
use PHPUnit\Framework\TestCase;

final class ExampleTest extends TestCase {
  public function testAdd(): void {
    $this->assertEquals(
      5,
      Example::add(2, 3)
    );
  }

  public function testSubtract(): void {
    $this->assertEquals(
      -1,
      Example::subtract(2, 3)
    );
  }
}
