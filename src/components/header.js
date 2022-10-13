import React from 'react'
import Link from 'gatsby-link'


const Header = () => (
    <div class="header">
    <div class="bifrost"><div class="stars"></div></div>
    <Link to="/" class="nyancatinator">
    <table class="header-table"><tr>
    <td><span class="cattail">╯</span></td>
    <td>
        <span class="nyancat-og">
            N<span id="b">y</span>a<span id="b">n</span>C<span id="b">a</span>t
        </span>
        <span class="cat-icon">😸</span>
        <span class="inator">
            <span class="zap">⚡</span>Inat<span class="inator-icon">⚙️</span>r
        </span>
    </td>
    </tr></table>
    </Link>
    </div>
)

export default Header
