// Workflow.js
import About from '../About/About';
import Assets from '../../03.Organisms/Assets/Assets';
import Method from '../../03.Organisms/Method/Method';
import Madness from '../../03.Organisms/Madness/Madness';
import Poem from '../../03.Organisms/Poem/Poem';

const Workflow = () => {

    return (
        <main id="workflow">
            <Method data-number="01" />
            <Assets data-number="02" />
            <Madness data-number="03" />
        </main>
    );
}

export default Workflow;