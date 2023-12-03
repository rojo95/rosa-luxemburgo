<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // permisos iniciales del sistema
        $permissions = [
            'dashboard',
            'profile.edit',
        ];
        // roles iniciales del sistema
        $roles = [
            [
                'name' => 'Administrador',
            ],
            [
                'name' => 'Estudiante',
            ],
            [
                'name' => 'Profesor',
            ],
        ];

        foreach ($roles as $rol) {
            Role::create(['name'=>$rol['name']]);
        }

    }
}
