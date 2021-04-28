<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    protected $guaded = [];
    protected $appends = ['label'];
    protected $hidden = ["created_at", "updated_at"];

    public function getLabelAttribute() {
        return $this->name;
    }    
}
