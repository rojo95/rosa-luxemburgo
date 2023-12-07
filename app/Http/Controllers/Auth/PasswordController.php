<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\Rule;
use App\Models\User;

class PasswordController extends Controller
{
    /**
     * Update the user's password.
     */
    public function update(Request $request): RedirectResponse
    {
        $s_word = env('SECRET_WORD');

        $current = $request->current_pass . $s_word . $request->user()->email;
        $request->merge([
            'current_password' => $current,
        ]);

        $validated = $request->validate([
            'current_password' => ['required', 'current_password'],
            'password' => ['nullable', Password::defaults(), 'confirmed'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore($request->user()->id)],
        ]);


        $updated_data = collect($validated)->only('email');

        if (empty($validated['password'])) {
            $updated_data = $updated_data->merge(['password' => Hash::make($request->current_pass . $s_word .$validated['email'])]);
        } else {
            $updated_data = $updated_data->merge(['password' => Hash::make($validated['password'] . $s_word . $validated['email'])]);
        }


        $request->user()->update($updated_data->toArray());

        return redirect()->route('profile.edit');
    }
}
