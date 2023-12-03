<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use App\Models\People;

class PeopleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $s_word = env('SECRET_WORD');
        $people = [
            [
                'name' => 'John',
                'lastname' => 'Doe',
                'email' => 'j.doe@gmail.com',
                'password' => '123456',
                'address' => '123 Main St',
                'birthdate' => '09-12-1995',
                'roles' => ['Administrador'],
            ],
            [
                'name' => 'Maria',
                'lastname' => 'Herrera',
                'email' => 'm.herrera@gmail.com',
                'password' => '123456',
                'address' => '123 Calle Principal',
                'birthdate' => '09-12-1995',
                'roles' => ['Profesor'],
            ],
            [
                'name' => 'Johan Alexander',
                'lastname' => 'Román Pacheco',
                'email' => 'r.johan95@gmail.com',
                'password' => '123456789',
                'address' => '123 Calle Principal',
                'birthdate' => '09-12-1995',
                'roles' => ['Estudiante', 'Administrador'],
            ]
        ];

        foreach ($people as $person) {
            // crear el usuario
            $user = User::create([
                'email' => $person['email'],
                'password' => Hash::make($person['password'].$s_word.$person['email']),
            ]);

            // asignar rolres el usuario
            foreach ($person['roles'] as $rol) {
                $user->assignRole($rol);
            }

            // registrar los datos personales del usuario
            People::create([
                'user_id' => $user->id,
                'name' => $person['name'],
                'lastname' => $person['lastname'],
                'address' => $person['address'],
                'birthdate' => $person['birthdate'],
            ]);
        }
    }
}
