import React from 'react';

const Users = () => {
    return (
        <div>
            {/* user creation */}
            <div className='grid grid-cols-2 gap-5 mx-24 my-5 justify-center items-center'>
                <div >
                    <label class="form-control">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group input-group-vertical">
                        <span>Name</span>
                        <input type="text" placeholder="your name" class="input input-bordered" />
                    </label>
                </div>
                <div>
                    <button class="btn btn-primary">Button</button>
                </div>
            </div>

            {/* user update */}
            <div className='grid grid-cols-2 gap-5 mx-24 my-5 justify-center items-center'>
                <div >
                    <label class="form-control">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group input-group-vertical">
                        <span>Name</span>
                        <input type="text" placeholder="your name" class="input input-bordered" />
                    </label>
                </div>
                <div>
                    <button class="btn btn-primary">Button</button>
                </div>
            </div>
            {/* user delete */}

            <div className='grid grid-cols-2 gap-5 mx-24 my-5 justify-center items-center'>
                <div >
                    <label class="form-control">
                        <span class="label-text">Your Name</span>
                    </label>
                    <label class="input-group input-group-vertical">
                        <span>Name</span>
                        <input type="text" placeholder="your name" class="input input-bordered" />
                    </label>
                </div>
                <div>
                    <button class="btn btn-primary">Button</button>
                </div>
            </div>

        </div>
    );
};

export default Users;