<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\People;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $people = [
            [
                'name' => 'John',
                'lastname' => 'Doe',
                'email' => 'j.doe@gmail.com',
                'password' => '123456',
                'address' => '123 Main St',
                'rol' => 'Admin',
            ],
            [
                'name' => 'Maria',
                'lastname' => 'Herrera',
                'email' => 'm.herrera@gmail.com',
                'password' => '123456',
                'address' => '123 Calle Principal',
                'rol' => 'Profesor',
            ],
            [
                'name' => 'Axel',
                'lastname' => 'Lander',
                'email' => 'a.lander@gmail.com',
                'password' => '123456',
                'address' => '123 Calle Principal',
                'rol' => 'Alumno',
            ]
        ];
        foreach ($people as $person) {

            $user = User::create([
                'email' => $person['email'],
                'password' => bcrypt($person['password']),
            ]);

            People::create([
                'user_id' => $user->id,
                'name' => $person['name'],
                'lastname' => $person['lastname'],
                'address' => $person['address'],
            ]);
        }
    }
}
