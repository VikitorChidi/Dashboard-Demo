import {Suspense} from 'react';
import PropTypes from 'prop-types';
import Loader from "../loader/Loader";

const Loadable = (Component) => {
    const LoadableComponent = (props) => (
        <Suspense fallback={<Loader/>}>
            <Component {...props} />
        </Suspense>
    );

    // Set display name for better debugging in React DevTools
    const componentName = Component.displayName || Component.name || 'Component';
    LoadableComponent.displayName = `Loadable(${componentName})`;

    // Add PropTypes validation
    LoadableComponent.propTypes = {
        Component: PropTypes.elementType.isRequired,
    };

    return LoadableComponent;
};

export default Loadable;