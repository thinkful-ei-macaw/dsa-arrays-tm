class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  free(ptr) {}

  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  get(ptr) {
    return this.memory[ptr];
  }

  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;

//--------------------------------------------



//--------------------------------------------------------

//retrieve values
// get(index) {
//   if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//   }
//   return memory.get(this.ptr + index);
// }

// //pop values
// pop() {
//   if (this.length == 0) {
//       throw new Error('Index error');
//   }
//   const value = memory.get(this.ptr + this.length - 1);
//   this.length--;
//   return value;
// }

// //insert values
// insert(index, value) {
//   if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//   }

//   if (this.length >= this._capacity) {
//       this._resize((this.length + 1) * Array.SIZE_RATIO);
//   }

//   memory.copy(this.ptr + index + 1, this.ptr + index, this.length - index);
//   memory.set(this.ptr + index, value);
//   this.length++;
// }

// //remove values
// remove(index) {
//   if (index < 0 || index >= this.length) {
//       throw new Error('Index error');
//   }
//   memory.copy(this.ptr + index, this.ptr + index + 1, this.length - index - 1);
//   this.length--;
// }


// Array.SIZE_RATIO = 3;