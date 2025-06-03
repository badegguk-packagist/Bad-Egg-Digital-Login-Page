<?php

namespace bedlp\lib;

class Templates
{
    public function __construct()
    {
        add_filter( 'login_body_class', [$this, 'bodyClass'] );
        // add_action( 'login_headertitle', [$this, 'headertitle'] );
        add_action( 'login_message', [$this, 'message'] );
        // add_action( 'login_errors', __NAMESPACE__ . '\\errors' );
        // add_action( 'login_form', __NAMESPACE__ . '\\form' );
        add_action( 'login_footer', [$this, 'footer'] );
    }

    public function bodyClass( $classes ) {
        $classes[] = 'bedlp-login';
        return $classes;
    }

    public function message()
    {
        $path = BEDLP_URL . 'assets/dist/images/content/';

        ?>

        <div
            id="js-bedlp-animated-brand"
            class="bedlp-animated-brand"
            data-mov="<?= $path ?>icon-bad-egg-digital.mov"
            data-webm="<?= $path ?>icon-bad-egg-digital.webm"
        >
            <img
                class="bedlp-animated-brand-foreground"
                src="<?= $path ?>logo-bad-egg-extinguished-knockout.svg"
                width="375"
                height="525"
                alt="Bad Egg Digital"
            />
            <video
                class="bedlp-animated-brand-icon"
                poster="<?= $path ?>icon-bad-egg-digital-fallback.png"
                src=""
                loop
                muted
                autoPlay
                playsInline
            ></video>
        </div>

        <?php
    }

    public function footer()
    {
        $path = BEDLP_URL . 'assets/dist/images/content/';

        ?>
            <div class="bedlp-bg">
                <img
                    width="1920"
                    height="1280"
                    alt=""
                    src="<?= $path ?>bg-badegg-1000x1733.jpg"
                    srcset="
                        <?= $path ?>bg-badegg-1920x1280.jpg 1920w,
                        <?= $path ?>bg-badegg-1440x960.jpg 1440w,
                        <?= $path ?>bg-badegg-1000x667.jpg 1000w,
                        <?= $path ?>bg-badegg-1000x1733.jpg 1733h,
                        <?= $path ?>bg-badegg-640x427.jpg 640w,
                        <?= $path ?>bg-badegg-400x267.jpg 400w"
                />
        </div>

        <?php
    }
}
