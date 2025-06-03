<?php

namespace bedlp\lib;

class Enqueue
{
    public function __construct()
    {
        add_action('login_enqueue_scripts', [$this, 'scripts']);
    }

    public function scripts(){
        wp_enqueue_script(BEDLP, BEDLP_URL .'assets/dist/js/main.js', [], BEDLP_VER, true );
        wp_enqueue_style(BEDLP, BEDLP_URL .'assets/dist/css/main.css', [], BEDLP_VER );
    }
}
