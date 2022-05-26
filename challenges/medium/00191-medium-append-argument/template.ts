type AppendArgument<Fn extends (...args: any[])=> any, A> = Fn extends (...args:infer P)=> infer T ? (...args:[...P,A]) => T : never