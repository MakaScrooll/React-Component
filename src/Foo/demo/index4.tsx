import React from 'react';

import Switch from '../index';

export default function SwitchDemo1() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Switch leftText={'标签1'} rightText={'标签2'}></Switch>
            <Switch leftText={'标签3'} rightText={'标签4'}></Switch>

        </div>

    )
}