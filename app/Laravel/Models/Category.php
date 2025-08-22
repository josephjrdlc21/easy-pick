<?php

namespace App\Laravel\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

use Database\Factories\CategoryFactory;

use Carbon\Carbon;

class Category extends Model{
    
    use HasFactory, SoftDeletes;

    protected static function newFactory()
    {
        return CategoryFactory::new();
    }

    public $timestamps = true;
    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = "categories";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    /**
     * The attributes that created within the model.
     *
     * @var array
     */
    protected $appends = [
        'date_created', 
        'date_updated'
    ];
    
    protected $dates = [];
    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [];

    public function getDateCreatedAttribute()
    {
        return $this->created_at->format('m/d/Y h:i A');    
    }

    public function getDateUpdatedAttribute()
    {
        return $this->updated_at->format('m/d/Y h:i A');    
    }
}