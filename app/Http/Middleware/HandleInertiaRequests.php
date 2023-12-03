<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        $user = Auth::user();

        if ($user) {
            $user->load('roles');

            $user = [
                'id' => $user->id,
                'userInfo' => collect($user->userInfo)->except(['user_id', 'updated_at','id']),
                'email' => $user->email,
                'roles' => collect($user->roles)->map(function ($rol) {
                    return collect($rol)->only(['id','name']);
                }),
            ];
        }

        return [
            ...parent::share($request),
            // 'aut
            // Lazily...
            'auth.user' => fn () => $request->user()
                ? $user
                : null,
            'ziggy' => fn () => [
                ...(new Ziggy)->toArray(),
                'location' => $request->url(),
            ],
        ];
    }
}
