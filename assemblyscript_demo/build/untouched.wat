(module
 (type $FUNCSIG$dd (func (param f64) (result f64)))
 (type $FUNCSIG$v (func))
 (memory $0 0)
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $~lib/memory/HEAP_BASE i32 (i32.const 8))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "fibonacci" (func $assembly/index/fibonacci))
 (func $assembly/index/fibonacci (; 0 ;) (type $FUNCSIG$dd) (param $0 f64) (result f64)
  local.get $0
  f64.const 1
  f64.le
  if
   f64.const 1
   return
  end
  local.get $0
  f64.const 1
  f64.sub
  call $assembly/index/fibonacci
  local.get $0
  f64.const 2
  f64.sub
  call $assembly/index/fibonacci
  f64.add
 )
 (func $null (; 1 ;) (type $FUNCSIG$v)
 )
)
