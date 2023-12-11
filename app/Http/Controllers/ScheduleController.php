<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $schedules = [
            [
                'name' => 'español para extranjeros',
                'image' => 'https://pbs.twimg.com/media/EwSiP5bXEAM9pKA.png',
                'hour' => '9:00',
                'professor' => 'Jose Rondón',
                'day' => 1
            ],
            [
                'name' => 'español para extranjeros',
                'image' => 'https://pbs.twimg.com/media/EwSiP5bXEAM9pKA.png',
                'hour' => '9:00',
                'professor' => 'Jose Rondón',
                'day' => 3
            ],
            [
                'name' => 'aleman',
                'level' => '1',
                'image' => 'https://media.ambito.com/p/80028e41e9945460497ab5f4ad3eefcb/adjuntos/239/imagenes/040/789/0040789549/alemania-banderajpg.jpg',
                'hour' => '10:30',
                'professor' => 'Strauss Heineker',
                'day' => 4
            ],
            [
                'name' => 'aleman',
                'level' => '1',
                'image' => 'https://media.ambito.com/p/80028e41e9945460497ab5f4ad3eefcb/adjuntos/239/imagenes/040/789/0040789549/alemania-banderajpg.jpg',
                'hour' => '10:30',
                'professor' => 'Strauss Heineker',
                'day' => 2
            ],
            [
                'name' => 'inglés',
                'level' => '2',
                'image' => 'https://ichef.bbci.co.uk/news/640/cpsprodpb/0A8C/production/_127500720_gettyimages-1243678871.jpg',
                'hour' => '15:00',
                'professor' => 'Rossy Hernandez',
                'day' => 2
            ],
            [
                'name' => 'inglés',
                'level' => '2',
                'image' => 'https://ichef.bbci.co.uk/news/640/cpsprodpb/0A8C/production/_127500720_gettyimages-1243678871.jpg',
                'hour' => '15:00',
                'professor' => 'Rossy Hernandez',
                'day' => 4
            ],
            [
                'name' => 'francés',
                'level' => '3',
                'image' => 'https://eldinero.com.do/wp-content/uploads/francia-economia.jpeg',
                'hour' => '13:00',
                'professor' => 'Francois Renoi',
                'day' => 5
            ],
            [
                'name' => 'francés',
                'level' => '3',
                'image' => 'https://eldinero.com.do/wp-content/uploads/francia-economia.jpeg',
                'hour' => '13:00',
                'professor' => 'Francois Renoi',
                'day' => 2
            ],
        ];
        return Inertia::render('Schedule/Index', [
            'schedules' => $schedules
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
