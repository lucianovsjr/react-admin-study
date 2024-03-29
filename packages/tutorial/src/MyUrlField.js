import React from 'react';
import { useRecordContext } from 'react-admin';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        height: '0.5em',
        paddingLeft: 2,
    },
});

const MyUrlField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]} className={useStyles.link}>
            {record[source]}
            <LaunchIcon className={useStyles.icon} />
        </a>
    ) : null;
}

export default MyUrlField;
