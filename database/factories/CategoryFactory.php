<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

use App\Laravel\Models\Category;
/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Model>
 */
class CategoryFactory extends Factory
{
    protected $model = Category::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(),
        ];
    }
}
