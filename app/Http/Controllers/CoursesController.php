<?php

namespace App\Http\Controllers;

use App\Models\Courses;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Auth;

class CoursesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $subjects = [
            [
                'name' => 'español para extranjeros',
                'image' => 'https://pbs.twimg.com/media/EwSiP5bXEAM9pKA.png',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'aleman',
                'image' => 'https://media.ambito.com/p/80028e41e9945460497ab5f4ad3eefcb/adjuntos/239/imagenes/040/789/0040789549/alemania-banderajpg.jpg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'chino (simplificado)',
                'image' => 'https://img.europapress.es/fotoweb/fotonoticia_20181113201849_640.jpg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'francés',
                'image' => 'https://eldinero.com.do/wp-content/uploads/francia-economia.jpeg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'inglés',
                'image' => 'https://ichef.bbci.co.uk/news/640/cpsprodpb/0A8C/production/_127500720_gettyimages-1243678871.jpg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'portugués',
                'image' => 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/07/bandera-portugal-3090372.jpg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
            [
                'name' => 'ruso',
                'image' => 'https://images.ecestaticos.com/PPGv3Bmdzqc44G4r1uxlE2YmCrw=/0x0:2272x1565/1338x752/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fcd1%2Fab9%2Fd23%2Fcd1ab9d23318cee8c46ae65888a9295a.jpg',
                'description' => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
                'quota' => 30,
                'registrations' => 10,
            ],
        ];
        return Inertia::render('Subjects/Index', [
            'subjects' => $subjects
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Subjects/CreateSubject');
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
    public function show(Courses $courses)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Courses $courses)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Courses $courses)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Courses $courses)
    {
        //
    }
}
