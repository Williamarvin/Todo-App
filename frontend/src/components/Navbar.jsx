import { useState } from 'react';

function ResponsiveAppBar() {
    const menu = [
        { label: 'New Note', href: '#' },
        { label: 'All Notes', href: '#all' },
        { label: 'End of Notes', href: '#end' },
    ];

    const [active, setActive] = useState(menu[0].label);
    const [open, setOpen] = useState(false);

    const handleSelect = (label) => {
        setActive(label);
        setOpen(false); // close the mobile menu when an item is clicked
    };

    return (
        <header className="appbar">
            <nav className="nav" aria-label="Primary">
                <a className="brand" href="/">
                    <img src="images/note.png" alt="" id="note_icon" />
                    Notes
                </a>

                <button
                    className="menu-toggle"
                    aria-expanded={open}
                    aria-controls="primary-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    <span className="sr-only">Toggle menu</span>
                    <span className={`burger ${open ? 'open' : ''}`} />
                </button>

                <ul id="primary-menu" className={`menu ${open ? 'open' : ''}`}>
                    {menu.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className={active === item.label ? 'active' : ''}
                                onClick={() => handleSelect(item.label)}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default ResponsiveAppBar;
