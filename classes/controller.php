<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Controller code
 *
 * @package     local_disablerightclick
 * @copyright   2020 Yogesh Shirsath <yogshirsath@hotmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @author      Yogesh Shirsath
 */


namespace local_disablerightclick;

defined('MOODLE_INTERNAL') || die();

use context;
use context_course;
use context_system;

/**
 * Controller class defines main function to control plugin working
 *
 * @copyright   2020 Yogesh Shirsath <yogshirsath@hotmail.com>
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class controller {
    /**
     * Check if current user is admin or manager of site
     * @param  integer $contextid Context id of course
     * @return boolean            True if user is site admin/manager
     */
    public function is_allowed($contextid = 0) {
        global $USER, $DB, $COURSE;

        if ($contextid == 0 || !$DB->record_exists('context', array('id' => $contextid))) {
            $context = context_course::instance($COURSE->id);
        } else {
            $context = context::instance_by_id($contextid);
        }
        if (has_capability('local/disablerightclick:allow', $context)) {
            return true;
        }
        // Check switched role.
        if (isset($USER->access['rsw'])) {
            $switch = $USER->access['rsw'];
            $context = context_course::instance(SITEID);
            if (isset($switch[$context->path])) {
                return $DB->get_field('role', 'shortname', array('id' => $switch[$context->path])) == 'manager';
            }
        }
        return false;
    }
}
