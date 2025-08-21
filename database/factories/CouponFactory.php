<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

use App\Laravel\Models\Coupon;

class CouponFactory extends Factory
{
    protected $model = Coupon::class;

    public function definition() : array
    {
        return [
            'code' => strtoupper('COUP-' . Str::random(5) . '-' . $this->faker->numberBetween(1000, 9999)),
            'discount_type' => $this->faker->randomElement(['fixed', 'percent']),
            'value' => function (array $attributes) {
                return $attributes['discount_type'] === 'percent' ? fake()->numberBetween(5, 50) : fake()->numberBetween(50, 500);
            },
            'expires_at' => $this->faker->dateTimeBetween('now', '+3 months'),
            'usage_limit' => $this->faker->numberBetween(1, 100),
        ];
    }
}