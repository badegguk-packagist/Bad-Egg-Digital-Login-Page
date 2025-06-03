<?php

/**
 * Plugin main file.
 *
 * @package   badegguk\bad-egg-digital-login-page
 *
 * @wordpress-plugin
 * Plugin Name:       Bad Egg Digital Login Page
 * Plugin URI:        https://www.badegg.uk
 * Description:       Applies Bad Egg Digital Branding elements to the Wordpress login page.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      8.1
 * Author:            Bad Egg Digital
 * Author URI:        https://www.badegg.uk
 * Text Domain:       bad-egg-digital-login-page
 */

namespace bedlp;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if(!defined('BEDLP')) define('BEDLP', 'bad-egg-digital-login-page');
if(!defined('BEDLP_VER')) define('BEDLP_VER', '1.0.0');
if(!defined('BEDLP_BASENAME')) define('BEDLP_BASENAME', plugin_basename(__FILE__));
if(!defined('BEDLP_FILE')) define('BEDLP_FILE', __FILE__);
if(!defined('BEDLP_DIR')) define('BEDLP_DIR', plugin_dir_path( __FILE__ ));
if(!defined('BEDLP_URL')) define('BEDLP_URL', plugin_dir_url( __FILE__ ));

require_once __DIR__ . '/lib/enqueue.php';
require_once __DIR__ . '/lib/templates.php';

/*
|--------------------------------------------------------------------------
| Autoload PSR-4 files
|--------------------------------------------------------------------------
*/

function autoload_psr4($name) {
    $path = BEDLP_DIR . '/' . $name . '/*.php';
    $namespace = __NAMESPACE__ . '\\' . $name;

    foreach(glob($path) as $filename) {
        $class = $namespace . '\\' . basename($filename, '.php');
        new $class();
    }
}

autoload_psr4('lib');
