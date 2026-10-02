export const HelpPanel = () => (
  <div className="absolute top-0 inset-x-0 flex justify-center">
    <div
      className="w-fit rounded-b-xl border border-t-0 bg-white/10 p-5 px-20 text-foreground"
      style={{
        borderColor: 'hsl(255 30% 60% / 20%)',
      }}
    >
      <div className="mb-2 text-md text-foreground font-bold">
        Help Panel - ocodo.arc.machine
      </div>
      <div className='text-sm'>
        <div className="grid grid-cols-[4rem_1fr] items-center gap-2">

          <div className="text-foreground">Key</div>
          <div className="text-foreground">Action</div>
          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            f
          </div>
          <div className="text-foreground">Toggle logo fade in / out</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            r
          </div>
          <div className="text-foreground">Reset & random set of arcs</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            1..9
          </div>
          <div className="text-foreground">Reset & number of arcs</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            v
          </div>
          <div className="text-foreground">Toggle button visibility</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            g
          </div>
          <div className="text-foreground">Toggle gradient background</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            b
          </div>
          <div className="text-foreground">Toggle linecaps butt or round</div>

          <div className="text-foreground flex w-8 justify-center rounded-xl bg-foreground/10 p-2 font-mono">
            t
          </div>
          <div className="text-foreground">Toggle theme Dark/Light</div>

          <div className="text-foreground flex w-8 flex-col items-center justify-center rounded-xl bg-foreground/10 p-2 font-mono text-[12px]">
            <div className="text-foreground">Ctrl+?</div>
          </div>
          <div className="text-foreground">Toggle help panel</div>
        </div>
      </div>
    </div>
  </div>
)