import SafeString from '../../utils/safeString';
import * as React from 'react';

export default ({children}) => {
	return <a>{SafeString(children)}</a>;
};
